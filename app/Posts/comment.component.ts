import {Component, Input} from 'angular2/core';

@Component({
    selector: 'post-comment',
    template: `
               <div class="comment">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img class="media-object" [src]="'http://lorempixel.com/80/80/people?random=' + comment.id" />
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{ comment.name }} </h4>
                            <div class="comment-text"> {{ comment.body}} </div>
                        </div>
                    </div>
                </div>
            `,
    styles: [`
                .comment {
                    margin: 30px;               
                }

                img {
                    width: 80px;
                    height: 80px; 
                    border-radius: 100%;
                }                 
            `]
})

export class CommentComponent {
    
    @Input() comment;    

} 

