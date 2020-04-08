import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { Todo } from './../todo/Todo';
import { SearchService } from './../search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchservice: SearchService) { }

  //searchservice:SearchService;
  //myform: FormGroup
  searchField: FormControl;
  // userId: FormControl;
  // id : FormControl;
  // title: FormControl;
  // completed: FormControl;

  @Output()
  evtemitter = new EventEmitter();

  parameter: FormControl;

  @Input()
  dataToBeFiltered: Array<Todo>;
  // @Input()
  // backupData : Array<Todo>;

  filterdData: Array<Todo>;


  ngOnInit(): void {
    this.filterdData = [];
    this.searchservice
    //= new SearchService();
    this.parameter = new FormControl("id");
    console.log(this.parameter);
   // this.parameter.value="id";
    this.searchField = new FormControl('');

    this.searchField.valueChanges
      .pipe(
        debounceTime(1000)
          ).subscribe(item => {
        //console.log(item);
        //console.log(this.parameter.value);
        //console.log(this.dataToBeFiltered);
        if (this.parameter.value == "" || item == "")
          this.filterdData = this.dataToBeFiltered;
        else
          this.filterdData = this.searchservice.filterData(this.dataToBeFiltered, this.parameter.value, item);
        console.log("Filtered data" + this.filterdData);
        this.evtemitter.emit(this.filterdData);
      })

  }

}
