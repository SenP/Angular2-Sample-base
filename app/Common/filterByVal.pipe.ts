
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'filterByVal',
    pure: true
})

export class FilterByValPipe implements PipeTransform {

    transform(value, args) {

        var filterObj = args[0];

        if (!filterObj.userId || isNaN(filterObj.userId))
            return value;

        var result = [];

        value.forEach(item => {

            if (_.isMatch(item, filterObj)) {
                result.push(item);
            }
        })

        return result;
    }
}