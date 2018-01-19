import R from "ramda";

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

export const measureNavContainerOffset = R.tryCatch(
  () => document.querySelector(".js-nav-container").offsetHeight,
  () => 0
);


export function scrollTo(top){
  window.scroll({
    top,
    left: 0,
    behavior: "smooth"
  });
}
