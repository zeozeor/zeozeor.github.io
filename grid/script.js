const elem = document.querySelectorAll("nav>ul>li>label");
elem.forEach((label)=>{
  label.addEnentListener("click", ()=>{
    document.hetElemntById("check-icob").checked=false
  });
});