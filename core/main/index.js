// import dependencies
import Alpine from '@alpinejs/csp';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

// add module specific scripts in ALPHABETICAL order
import webcamImageUpload from '../../content-elements/advanced/webcam-image-upload/prototype/webcam-image-upload';
import accordionElement from '../../content-elements/base/accordion/prototype/accordion';
import btnElement from '../../content-elements/base/button/prototype/button';
import chartElement from '../../content-elements/base/chart/prototype/chart';
import newsSnippet from '../../content-elements/base/news-snippet/prototype/news-snippet';
import slotFinder from '../../content-elements/base/slot-finder/prototype/slot-finder';
import tableElement from '../../content-elements/base/table/prototype/table';
import formElement from '../../content-elements/form/form-container/form';
import telInput from '../../content-elements/form/form-field-tel/prototype/form-tel-input';
import formField from '../../content-elements/form/form-field/prototype/form-field';
import formPoll from '../../content-elements/form/poll/prototype/poll';
import fromRadio from '../../content-elements/form/radio/prototype/radio';
import checkbox from '../../content-elements/form/checkbox/prototype/checkbox';
import selectField from '../../content-elements/form/select/prototype/select';

Alpine.data('webcamImageUpload', webcamImageUpload)
Alpine.data('accordionElement',  accordionElement)
Alpine.data('btnElement', btnElement)
Alpine.data('chartElement', chartElement)
Alpine.data('newsSnippet', newsSnippet)
Alpine.data('slotFinder', slotFinder)
Alpine.data('tableElement', tableElement)
Alpine.data('formElement', formElement)
Alpine.data('telInput', telInput)
Alpine.data('formField', formField)
Alpine.data('formPoll', formPoll)
Alpine.data('formRadio', fromRadio) 
Alpine.data('checkbox', checkbox)
Alpine.data('selectField', selectField)

// start Alpine.js AFTER importing all module scripts
window.Alpine = Alpine;
Alpine.start();