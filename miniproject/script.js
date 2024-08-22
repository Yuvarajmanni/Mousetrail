document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
  
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
  
    // Remove the trail after a short delay
    setTimeout(function() {
      trail.remove();
    }, 500);
  });
  