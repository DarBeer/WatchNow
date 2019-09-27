import { Component, OnInit }  from '@angular/core';
import { LoaderService }      from '../../service/loader.service';
import { Subscription }       from "rxjs";
import { debounceTime }       from 'rxjs/operators';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.loadingSubscription = this.loaderService.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
