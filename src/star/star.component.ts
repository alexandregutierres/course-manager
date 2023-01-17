import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    
    @Input()
    rating: number = 0;

    startWidth: number;

    ngOnChanges(changes: SimpleChanges): void {
        this.startWidth = this.rating * 64 / 5;
    }



}