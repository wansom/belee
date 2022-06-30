import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beelee';
constructor(){
  this.loadScript();
  console.log("construcgtor")
}
  ngOnInit(): void {
    this.loadScript();
    console.log("init")
  }


  loadScript() {
    let body = <HTMLDivElement>document.body;
    console.log("load script console log")
    let style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/style.css";
    body.appendChild(style);


    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/bootstrap.min.css";
    body.appendChild(style);

    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/font-awesome.min.css";
    body.appendChild(style);


    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/ssets/css/themify-icons.css";
    body.appendChild(style);

    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/elegant-icons.css";
    body.appendChild(style);

    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/owl.carousel.min.css";
    body.appendChild(style);

    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/nice-select.css";
    body.appendChild(style);

    
    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "/assets/css/jquery-ui.min.css";
    body.appendChild(style);

    style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = "assets/css/slicknav.min.css";
    body.appendChild(style);



    



    let script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery-3.3.1.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/bootstrap.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery-ui.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery.countdown.min.js")
    body.appendChild(script);


    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery.nice-select.min.js")
    body.appendChild(script);


    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery.zoom.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery.dd.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/jquery.slicknav.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/owl.carousel.min.js")
    body.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "/assets/js/main.js")
    body.appendChild(script);

  }

}
