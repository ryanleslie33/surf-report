export class Surf {
  
  constructor(windDirection,swellPeriod,swellHeight){
    this.wind = windDirection;
    this.swell = swellPeriod;
    this.swellHeight = swellHeight;
    this.windScore = 0;
    this.sizeScore = 0;
    this.swellScore = 0;
  }
  
  swellChecker(){
    let swell = this.swell
    if(swell > 16){
      this.swellScore += 5;
    }
    else if (swell >= 12 && swell <= 15) {
      this.swellScore += 4;
    }
    else if (swell >= 10 && swell <=12 ) {
      this.swellScore += 3;
    }
    else if(swell < 10){
      this.swellScore += 1;
    }
    return this.swellScore;
  }
  sizeChecker(){
    let swell = this.swell 
    let height = this.swellHeight
    let swellHeight = (swell * height);
    if ( swellHeight >= 30){
      this.sizeScore += 5;
    }
  else if ( swellHeight >= 25 && swellHeight <= 30){
      this.sizeScore += 4;
    }
    else if ( swellHeight >= 20 && swellHeight <= 24){
        this.sizeScore += 3;
      }
      else if ( swellHeight >= 11 && swellHeight <= 19){
          this.sizeScore += 2;
        }
        else if ( swellHeight <10){
            this.sizeScore += 1;
          }
          return this.sizeScore;
  }
  calculateScore(){
    let wind = this.wind;
    let sizeScore = this.sizeScore;
    let swellScore = this.swellScore;
    let answer = ( wind + sizeScore + swellScore / 3);
  
    return answer;
  }
}