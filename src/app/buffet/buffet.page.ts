import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-buffet',
  templateUrl: './buffet.page.html',
  styleUrls: ['./buffet.page.scss'],
})
export class BuffetPage implements OnInit {

  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }
  ngOnInit() {
  }

 formAdicionarBuffet(){
    this.router.navigate(['/adicionar-buffet']);
  }

}