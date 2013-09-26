var keyBoardInput = {
  initialize:function() {
    this._bind_keys();
  },
  
  _bind_keys:function() {
    //called whenever a key is pressed
    window.onkeydown = function(e) {
      switch(e.keyCode) {
        //called when A key is pressed
        case 65:
          break;
        //called when D key is pressed
        case 68:
          break;
        //called when S key is pressed
        case 83:
          break;
        //called when W key is pressed
        case 87:
          break;
      }
    }
    
    //called whenever a key is released
    window.onkeyup = function(e) {
      switch(e.keyCode) {
        //called when A key is pressed
        case 65:
          break;
        //called when D key is pressed
        case 68:
          break;
        //called when S key is pressed
        case 83:
          break;
        //called when W key is pressed
        case 87:
          break;
      }
    }
  },
}