declare module 'debounce' {
    function debounce<T extends (...args: any[]) => any>(fn: T, wait: number, immediate?: boolean): T;
    export = debounce;
}
