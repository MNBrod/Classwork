/**
 * @param  arr: the array to be sorted
 * @return the sorted array
 * @author maxBrod
 */
function bubbleSort(arr) {
	var length = arr.length;
	var gotSwapped = true;
	while (gotSwapped) {
		gotSwapped = false;
		for (var i = 0; i < length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				gotSwapped = true;
			}
		}
	}
	return arr;
}
/**
 * @param  {array} the array to be sorted
 * @return {array} the sorted array
 * @author maxBrod
 */
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	var mid = arr.length / 2
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);
	return merge(mergeSort(left), mergeSort(right));
}
/**
 * @param {array} left
 * @param {array} right
 * @returns
 */
function merge(left, right) {
	var ans = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			ans.push(left.shift());
		} else {
			ans.push(right.shift());
		}
	}
	while (right.length) {
		ans.push(right.shift());
	}
	while (left.length) {
		ans.push(left.shift());

	}
	return ans;
}
/**
 * swaps two values in an array
 *
 * @param {array} arr
 * @param {number} i
 * @param {number} j
 */
function switcher(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
/**
 *
 * splits a given array into two parts, and partially sorts it relative to a pivot
 * @param {array} arr
 * @param {number} pivot
 * @param {number} left
 * @param {number} right
 * @returns
 */
function split(arr, pivot, left, right) {
	var pivotV = arr[pivot],
		int = left;
	for (var i = left; i < right; i++) {
		if (arr[i] < pivotV) {
			switcher(arr, i, int)
			int++;
		}
	}
	switcher(arr, right, int)
	return int;
}
/**
 * QuickSort algorithm.
 *
 * @param {array} arr
 * @param {number} left: left bound
 * @param {number} right: right bound
 * @returns
 */
function quickSort(arr, left, right) {
	if (left === undefined) {
		left = 0;
		right = arr.length - 1;
	}
	var pivot,
	int;

	if (left < right) {
		pivot = right;
		int = split(arr, pivot, left, right);

		//sort left and right
		quickSort(arr, left, int - 1);
		quickSort(arr, int + 1, right);
	}
	return arr;
}
/**
 *
 *
 * @param {number} element
 * @param {array} arr
 * @returns the index of the requested element, or -1 if it isn't there
 */
function binarySearch(element, arr) {

	var low = 0;
	var high = arr.length - 1;
	var mid;
	var eleAtMid;

	while (low <= high) {
		mid = (low + high) / 2 | 0;
		eleAtMid = arr[mid];

		if (eleAtMid < element) {
			low = mid + 1;
		}
		else if (eleAtMid > element) {
			high = mid - 1;
		}
		else {
			return mid;
		}
	}

	return -1;
}

function trumpSort (arr) {
	return "that array was fake news"
}

var test = [1, 343, 21, 4324, 1342, 234, 32, 4234, 435, 3645, 6, 68, 7, 73, 4523, 41];
