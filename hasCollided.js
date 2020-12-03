function hasCollided(lbullet,lwall)
  {
      var bulletRightEdge = lbullet.x+lwall.width;
    var wallLeftEdge  = lwall.x;
  
      if(bulletRightEdge>=wallLeftEdge)
      {
          return true;
      }
      else
      {
      return false;
      }
}