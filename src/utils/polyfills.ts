// Polyfills for older browsers

// Object.fromEntries polyfill (Chrome 73+)
if (!Object.fromEntries) {
  Object.fromEntries = function(iterable: Iterable<readonly [PropertyKey, any]>): any {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {} as any);
  };
}

// String.prototype.replaceAll polyfill (Chrome 85+)
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(searchValue: string | RegExp, replaceValue: string): string {
    if (typeof searchValue === 'string') {
      return this.split(searchValue).join(replaceValue);
    }
    return this.replace(searchValue, replaceValue);
  };
}

// Promise.allSettled polyfill (Chrome 76+)
if (!Promise.allSettled) {
  Promise.allSettled = function<T>(promises: Array<Promise<T>>): Promise<Array<{status: 'fulfilled' | 'rejected', value?: T, reason?: any}>> {
    return Promise.all(
      promises.map(promise =>
        promise
          .then(value => ({ status: 'fulfilled' as const, value }))
          .catch(reason => ({ status: 'rejected' as const, reason }))
      )
    );
  };
}

// Array.prototype.at polyfill (Chrome 92+)
if (!Array.prototype.at) {
  Array.prototype.at = function<T>(this: T[], index: number): T | undefined {
    const len = this.length;
    const relativeIndex = Math.trunc(index) || 0;
    const actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    return actualIndex >= 0 && actualIndex < len ? this[actualIndex] : undefined;
  };
}

// IntersectionObserver polyfill check
if (!window.IntersectionObserver) {
  console.warn('IntersectionObserver not supported. Some animations may not work.');
}

// Web Share API fallback
if (!navigator.share) {
  console.info('Web Share API not supported. Using clipboard fallback.');
}

export {};