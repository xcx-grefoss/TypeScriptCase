
function call<T extends number[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args);
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
}

// 动机：使用受限的多态模拟变长参数函数，实现一个call函数。
// 正常会输出：由10个'a'组成的数组
// 报错原因不解，该如何解决

let a = call(fill, 10, 'a');
console.log(a);





