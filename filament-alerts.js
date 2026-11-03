(function () {
  const LOW_STOCK_THRESHOLD = 15;

  function remainingPercent(filament) {
    const total = Number(filament && filament.total);
    const remaining = Number(filament && filament.remaining);
    if (!Number.isFinite(total) || total <= 0 || !Number.isFinite(remaining)) return 0;
    return Math.max(0, Math.min(100, (remaining / total) * 100));
  }

  function isLowStock(filament, threshold = LOW_STOCK_THRESHOLD) {
    return remainingPercent(filament) < threshold;
  }

  function classifyLowStock(filaments, previouslyNotified = [], threshold = LOW_STOCK_THRESHOLD) {
    const low = filaments.filter(filament => isLowStock(filament, threshold));
    const knownIds = new Set(previouslyNotified);
    return {
      low,
      newlyAlerted: low.filter(filament => !knownIds.has(filament.id)),
      alertIds: low.map(filament => filament.id)
    };
  }

  const api = { LOW_STOCK_THRESHOLD, remainingPercent, isLowStock, classifyLowStock };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.FilamentAlerts = api;
})();

