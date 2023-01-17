import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Teste1',
                imageUrl: '/assets/images/forms.png',
                price: 10.0,
                code: '1234',
                duration: 10,
                rating: 5,
                releaseDate: 'Hoje'
            },
            {
                id: 2,
                name: 'Teste2',
                imageUrl: '/assets/images/http.png',
                price: 10.0,
                code: '1235',
                duration: 5,
                rating: 3,
                releaseDate: 'Ontem'
            }

        ]    
    }

    

}

