import $ from 'jquery';
import  { Surf } from 'C:/Users/ryan leslie/Desktop/Surf-Report/src/Surf.js'

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault()
    let windDirection = $("#windDirection").val();
    let swellPeriod = $("#swellPeriod").val();
    let waveSize = $("#waveSize").val();
    let swellHeight = $("#swellHeight").val();
  
    let newSurf = new Surf(windDirection,swellPeriod,waveSize,swellHeight)
    newSurf.swellChecker();
    newSurf.sizeChecker();
    newSurf.calculateScore();
    $("#output").append(newSurf.calculateScore());
  })
})