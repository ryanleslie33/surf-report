import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Styles.css';
import  { Surf } from '../src/Surf.js'


$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault()
    let windDirection = parseFloat($("#windDirection").val());
    let swellPeriod = parseFloat($("#swellPeriod").val());
    let swellHeight = parseFloat($("#swellHeight").val());
  
    let newSurf = new Surf(windDirection,swellPeriod,swellHeight)
    let time = new Date()
    newSurf.swellChecker();
    newSurf.sizeChecker();
    newSurf.calculateScore();
    $("#output").append( "your overall score is " +  newSurf.calculateScore() + ": "  + time + "swell period:" + swellPeriod + " swell hieght:" + swellHeight);
    
  })
})