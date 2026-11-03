import assert from 'node:assert/strict';
import test from 'node:test';
import { classifyLowStock, isLowStock, remainingPercent } from '../filament-alerts.mjs';

test('le seuil de 15 % est strict : 15 % ne déclenche pas l’alerte', () => {
  assert.equal(isLowStock({ total: 1000, remaining: 150 }), false);
  assert.equal(isLowStock({ total: 1000, remaining: 149 }), true);
});

test('le pourcentage est borné entre 0 et 100', () => {
  assert.equal(remainingPercent({ total: 1000, remaining: -10 }), 0);
  assert.equal(remainingPercent({ total: 1000, remaining: 1200 }), 100);
});

test('seules les nouvelles bobines sous le seuil génèrent un rappel', () => {
  const bobines = [
    { id: 'a', name: 'PLA noir', total: 1000, remaining: 100 },
    { id: 'b', name: 'PETG violet', total: 1000, remaining: 140 },
    { id: 'c', name: 'PLA blanc', total: 1000, remaining: 200 }
  ];
  const result = classifyLowStock(bobines, ['a']);
  assert.deepEqual(result.newlyAlerted.map(filament => filament.id), ['b']);
  assert.deepEqual(result.alertIds, ['a', 'b']);
});

test('une bobine rechargée quitte la liste des rappels déjà envoyés', () => {
  const result = classifyLowStock([{ id: 'a', total: 1000, remaining: 300 }], ['a']);
  assert.deepEqual(result.alertIds, []);
  assert.deepEqual(result.newlyAlerted, []);
});

