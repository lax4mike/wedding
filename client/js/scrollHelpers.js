

// Element -> Number
export function getOffsetTop(element) {
  const { top } = element.getBoundingClientRect();
  const scrollTop = getScrollTop();
  return top + scrollTop;
}


// cross browser schinanigans
export function getScrollTop(){
  return document.documentElement.scrollTop || document.body.scrollTop;
}


export function scrollTo(top){
  window.scroll({
    top,
    left: 0,
    behavior: "smooth"
  });
}
