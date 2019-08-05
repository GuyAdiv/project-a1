import { Item } from '../models/item';

export function arrayIteration (array) {
    // eslint-disable-next-line no-console
    console.log('array');
    let item;
    let index;
    for (index =0; index < array.length; index++) {
        item = array[index];
    }
    
    console.log(`array index ${index}`);
    return item;
}

export function listIteration (list) {
    let head = list;
    let p = head;
    let index = 0;

    while (p.next) {
        p = p.next;
        index++;
    }
    console.log(`list index ${index}`);
    return p;
}

export function demoArray (itemsCount = 0) {
    let arr = [];

    for (let index = 0; index < itemsCount; index++) {
        let item = new Item ('text');
        item.id = index;
        arr.push(item);        
    }

    return arr;
}

export function demoList (itemsCount = 1) {
    let head = new Item ('text');
    let p = head;

    for (let index = 0; index < itemsCount; index++) {
        let item = new Item('text');
        item.id = index;
        p.Next(item);
        p = item;      
    }

    return head;
}

function isObject(obj) {
    var type = typeof obj;
    return type === 'object' && !!obj;
}

export function clone (obj) {
    let result = {};
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (isObject(obj[prop])) {
                    result[prop] = clone(obj[prop]);
                } else {
                    result[prop] = obj[prop];
                }
            }
        }
    return result;
}

function isObjectToken (str) {
    if (str.length > 0 && str[0] === '{' && str[str.length-1] === '}') {
        return true;
    }

    return false;
}

function isArrayToken (str) {
    return false;
}

function isNumberToken (str) {
    return false;
}

function removeWarpper (str) {

    let result = str;
    if (str && str.length > 1) {
        result = str.slice(str.length-1, 1).slice(0,1);
    }

    return result;
}

export function JsonParse (str) {
    let result = {};
    if (!str) {
        return result;
    }

    if (isObjectToken(str)) {
        str = removeWarpper(str);
        const props = str.split(',');
        props.array.forEach(prop => {
            let item = (prop.trim()).split(':');
            let key = removeWarpper(item[0]);
            let val = removeWarpper(item[1]);
            if (isObjectToken(val)) {
                val = JsonParse(val);
            }
            result[key] = val;
        });
    }
    

    return result;
}