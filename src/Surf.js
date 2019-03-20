export class Surf {
  
  constructor(swellPeriod,waveSize,windDirection,swellHeight){
    this.wind = windDirection;
    this.size = waveSize;
    this.swell = swellPeriod;
    this.swellHeight = swellHeight;
    this.windScore = 0;
    this.sizeScore = 0;
    this.swellScore = 0;
    
  }
  
  swellChecker(){
    let swell = this.swell
    if(swell > 16){
      this.swellScore == 5;
    }
    else if(swell >= 12 && <= 15){
      this.swellScore == 4;
    }
    else if (swell >= 10 && <=12 ) {
      this.swellScore == 3;
    }
    else if(swell < 10){
      this.swellScore == 1;
    }
    return this.swellScore;
  }
  sizeChecker(){
    let swell = this.swell 
    let height = this.swellHeight
    let swellHeight = (swell * height);
    if ( swellHeight >= 30){
      this.sizeScore == 5;
    }
  else if ( swellHeight >= 25 && <= 30){
      this.sizeScore == 4;
    }
    else if ( swellHeight >= 20 && <= 24){
        this.sizeScore == 3;
      }
      else if ( swellHeight >= 11 && <= 19){
          this.sizeScore == 2;
        }
        else if ( swellHeight <10){
            this.sizeScore == 1;
          }
          return this.sizeScore;
  }
  calculateScore(){
    let wind = this.windDirection;
    let sizeScore = this.sizeScore;
    let swellScore = this.swellScore;
    let answer = ( wind + sizeScore + swellScore);
    return answer:
  }
}