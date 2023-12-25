import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { Button } from './app/components/button.component'; 

const bootstrap = () => bootstrapApplication(AppComponent, config);
const bootstrap2 = () => bootstrapApplication(Button, config);

export default bootstrap;
