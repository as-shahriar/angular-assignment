import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'Initial'})
export class CustomPipe implements PipeTransform{
    transform(fname,lname,id) {
        return `${fname[0]}${lname[0]}#${id}`; 
    }

}