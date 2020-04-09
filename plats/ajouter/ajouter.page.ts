import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PlatService } from "../../service/plat.service";
import { Router } from "@angular/router";
import { UtilsService } from "../../utils.service";


@Component({
  selector: "app-ajouter",
  templateUrl: "./ajouter.page.html",
  styleUrls: ["./ajouter.page.scss"]
})
export class AjouterPage implements OnInit {
  postPlatForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private service: PlatService,
    private route: Router,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.postPlatForm = this.formBuilder.group({
      nom: [
        null,
        [Validators.required, Validators.minLength(3), Validators.required]
      ],
      Description: [null, [Validators.required]],
      Prix: [null, [Validators.required]],
      Photo: [null, [Validators.required]]

    });
   
  }

 

  postPlat(platInfo: any) {
    this.service.postPlat(platInfo).subscribe(
      data => {
        this.utils.presentToast("Ajour réussi", "success");
        window.location.reload();
      },
      error => {
        this.utils.presentToast("Plat non ajouté!!!", "danger");
      }
    );
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;
}
