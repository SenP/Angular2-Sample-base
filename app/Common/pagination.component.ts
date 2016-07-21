import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from 'angular2/core';

@Component({
    selector: 'pagination',
    template: `
            <div *ngIf="totalPages > 1">
                <nav>
                    <ul class="pagination">
                        <li [class.disabled]="currentPage == 1" (click)="onClick(currentPage - 1);"><span>&laquo;</span></li>
                        <li *ngFor="#page of pages" class="page" 
                            [class.active]="page == currentPage" 
                            (click)="onClick(page)"> 
                            <span> {{ page }} </span>
                        </li>
                        <li [class.disabled]="currentPage == totalPages" (click)="onClick(currentPage + 1);"><span>&raquo;</span></li>
                    </ul>
                </nav>
            </div>
            `,
    styles: [`
               .pagination li:hover {
                   cursor: pointer;
               }            
            `]
})

export class PaginationComponent implements OnInit, OnChanges {

    @Input() items = [];
    @Input('page-size') pageSize = 10;

    @Output() pageChanged = new EventEmitter();

    private totalPages;
    private currentPage;
    private pages;
    pageStart;
    pageEnd;

    constructor() {

    }

    ngOnInit() {
        //Calculate total pages required and set current page to 1
        this.renderInit();
    }

    ngOnChanges(changes) {
        this.items = changes.items.currentValue;
        this.renderInit();
    }

    onClick(page) {
        if (page == this.currentPage || page < 1 || page > this.totalPages)
            return;

        this.currentPage = page;

        this.pageStart = (this.currentPage - 1) * this.pageSize;
        this.pageEnd = Math.min(this.pageStart + this.pageSize, this.items.length) - 1;

        this.emitPageChanged(page);
    }


    renderInit() {
        
        if (this.items.length <= this.pageSize) {
            this.totalPages = 1;
            this.currentPage = 1;
            this.pages = [1];
        }
        else {
            this.totalPages = Math.ceil(this.items.length / this.pageSize);
            this.pages = _.range(1, this.totalPages + 1)
            this.currentPage = 1;
        }

        this.pageStart = (this.currentPage - 1) * this.pageSize;
        this.pageEnd = Math.min(this.pageStart + this.pageSize, this.items.length) - 1;

        this.emitPageChanged(1);
    }

    emitPageChanged(page) {
        
        var pageItems = this.getPageItems(this.items, this.pageStart, this.pageEnd);

        this.pageChanged.emit({
            currentPage: page,
            currentPageItems: pageItems
        });
    }

    getPageItems(list: [], start, end) {

        if (list.length == 0) return [];

        if (!start) start = 0;

        if (!end || end > list.length)
            end = list.length - 1;

        return list.slice(start, end + 1);

    }
}