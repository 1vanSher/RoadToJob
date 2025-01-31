function myFilter(array, callback) {
    const result = []; // Создаем новый массив для хранения отфильтрованных элементов

    for (let i = 0; i < array.length; i++) { // Перебираем все элементы массива
        if (callback(array[i], i, array)) { // Вызываем callback с (элемент, индекс, исходный массив)
            result.push(array[i]); // Если callback вернул true, добавляем элемент в результат
        }
    }

    return result; // Возвращаем новый отфильтрованный массив
}
const numbers = [1, 2, 3, 4, 5];

// Фильтруем четные числа
const evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]