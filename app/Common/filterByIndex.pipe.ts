
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'filterByIndex',
    pure: true
})

export class FilterByIndexPipe implements PipeTransform {

    transform(list: [], [start, end]) {

        if (list.length == 0) return [];

        var l = list.length;

        if (!start) start = 0;

        if (!end || end > l) end = l - 1;

        return list.slice(start, end - start + 1);
    }
}