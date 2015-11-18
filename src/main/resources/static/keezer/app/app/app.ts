/**
 * Created on 2015-11-16.
 */

import {bootstrap, Component} from 'angular2/angular2';
import {ConfigFormComponent} from "./config-form.component";

@Component({
  selector: 'my-app',
  template: '<h1>Config Form</h1><config-form></config-form>',
  directives: [ConfigFormComponent]
})

class AppComponent {

}


bootstrap(AppComponent);


