(()=>{const t=document.getElementById("chessboard"),e=document.createElement("div");e.classList.add("knightIcon"),t.appendChild(e);for(let i=0;i<64;i++){const d=document.createElement("div");d.classList.add((Math.floor(i/8)+i)%2==0?"white":"black"),d.addEventListener("click",(()=>{const g=i%8,h=Math.floor(i/8);if(console.log("you clicked on square"+g+"and"+h),o){n=[g,h];const e=l(o,n);if(e&&e.length>0){for(const[o,n]of e){const e=8*n+o+1;t.children[e].classList.add("highlight")}c(e)}o=null,n=null}else{for(const t of document.querySelectorAll(".highlight"))t.classList.remove("highlight");o=[g,h],d.textContent="",e.style.display="block",s(d)}})),t.appendChild(d)}let o=null,n=null;const l=(t,e)=>{const o=[[-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[-1,2],[1,-2],[1,2]],n=[],l=([t,e])=>t>=0&&t<8&&e>=0&&e<8,s=[[t]],c=new Set([t.toString()]);for(;s.length>0;){const t=s.shift(),i=t[t.length-1];if(i.toString()===e.toString()){for(const e of t)n.push(e);break}for(const e of o){const o=[i[0]+e[0],i[1]+e[1]];l(o)&&!c.has(o.toString())&&(s.push([...t,o]),c.add(o.toString()))}}return n},s=o=>{const n=o.getBoundingClientRect(),l=n.left-t.getBoundingClientRect().left,s=n.top-t.getBoundingClientRect().top;e.style.left=l+"px",e.style.top=s+"px"},c=e=>{let o=0;const n=()=>{const l=e[o];s(t.children[8*l[1]+l[0]+1]),o++,o<e.length&&setTimeout(n,500)};n()};console.log(l([0,0],[3,3])),console.log(l([0,0],[7,7])),console.log(l([0,0],[8,8]))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R3pCLE1BQU1DLEVBQXlCLEtBRTdCLE1BQU1QLEVBQWF6QixFQUFLK0IsR0FHeEJwQixFQUNFOUIsRUFBV3VCLFNBQXlCLEVBQWhCcUIsRUFBVyxHQUFTQSxFQUFXLEdBQUssSUFJMURNLElBR0lBLEVBQXFCL0IsRUFBS0UsUUFDNUIrQixXQUFXRCxFQUF3QixJQUNyQyxFQUlGQSxHQUF3QixFQW1CMUJwQyxRQUFRQyxJQUFJSSxFQUFZLENBQUMsRUFBRyxHQUFJLENBQUMsRUFBRyxLQUNwQ0wsUUFBUUMsSUFBSUksRUFBWSxDQUFDLEVBQUcsR0FBSSxDQUFDLEVBQUcsS0FDcENMLFFBQVFDLElBQUlJLEVBQVksQ0FBQyxFQUFHLEdBQUksQ0FBQyxFQUFHLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgY2hlc3Nib2FyZCBlbGVtZW50XG5jb25zdCBjaGVzc2JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVzc2JvYXJkXCIpO1xuXG4vLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGtuaWdodCBpY29uXG5jb25zdCBrbmlnaHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmtuaWdodEljb24uY2xhc3NMaXN0LmFkZChcImtuaWdodEljb25cIik7XG5jaGVzc2JvYXJkLmFwcGVuZENoaWxkKGtuaWdodEljb24pO1xuXG4vLyBMb29wIHRocm91Z2ggZWFjaCBzcXVhcmUgb24gdGhlIGNoZXNzYm9hcmQgYW5kIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciBpdFxuZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gU2V0IHRoZSBjbGFzcyBvZiB0aGUgc3F1YXJlIHRvIGVpdGhlciAnd2hpdGUnIG9yICdibGFjaycgYmFzZWQgb24gaXRzIHBvc2l0aW9uIG9uIHRoZSBjaGVzc2JvYXJkXG4gIHNxdWFyZS5jbGFzc0xpc3QuYWRkKChNYXRoLmZsb29yKGkgLyA4KSArIGkpICUgMiA9PT0gMCA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIik7XG5cbiAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgc3F1YXJlXG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2xpY2tlZCBzcXVhcmVcbiAgICBjb25zdCB4ID0gaSAlIDg7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDgpO1xuXG4gICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvbiBzcXVhcmVcIiArIHggKyBcImFuZFwiICsgeSk7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnQgc3F1YXJlIGlzIG5vdCB5ZXQgc2V0LCBzZXQgaXQgYW5kIHBvcHVsYXRlIHRoZSBzcXVhcmUgd2l0aCBhIGtuaWdodCBzeW1ib2xcbiAgICBpZiAoIXN0YXJ0U3F1YXJlKSB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBzcXVhcmUgb24gdGhlIGNoZXNzYm9hcmQgYW5kIHJlbW92ZSBhbnkgZXhpc3RpbmcgaGlnaGxpZ2h0XG4gICAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZ2hsaWdodFwiKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcbiAgICAgIH1cblxuICAgICAgc3RhcnRTcXVhcmUgPSBbeCwgeV07XG4gICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAga25pZ2h0SWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgbW92ZUtuaWdodFRvU3F1YXJlKHNxdWFyZSk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBzdGFydCBzcXVhcmUgaXMgYWxyZWFkeSBzZXQsIHNldCB0aGUgdGFyZ2V0IHNxdWFyZSBhbmQgY2FsbCB0aGUga25pZ2h0TW92ZXMgZnVuY3Rpb25cbiAgICBlbHNlIHtcbiAgICAgIHRhcmdldFNxdWFyZSA9IFt4LCB5XTtcblxuICAgICAgY29uc3QgcGF0aCA9IGtuaWdodE1vdmVzKHN0YXJ0U3F1YXJlLCB0YXJnZXRTcXVhcmUpO1xuXG4gICAgICAvLyBJZiBhIHBhdGggaXMgZm91bmQsIGhpZ2hsaWdodCBlYWNoIHNxdWFyZSBpbiB0aGUgcGF0aFxuICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgW3gsIHldIG9mIHBhdGgpIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVJbmRleCA9IHkgKiA4ICsgeCArIDE7XG4gICAgICAgICAgY2hlc3Nib2FyZC5jaGlsZHJlbltzcXVhcmVJbmRleF0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgfVxuICAgICAgICBhbmltYXRlS25pZ2h0TW92ZXMocGF0aCk7XG4gICAgICB9XG4gICAgICAvLyBSZXNldCB0aGUgc3RhcnQgc3F1YXJlIGFuZCB0YXJnZXQgc3F1YXJlIHZhcmlhYmxlc1xuICAgICAgc3RhcnRTcXVhcmUgPSBudWxsO1xuICAgICAgdGFyZ2V0U3F1YXJlID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEFkZCB0aGUgc3F1YXJlIHRvIHRoZSBjaGVzc2JvYXJkXG4gIGNoZXNzYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbn1cblxuLy8gRGVmaW5lIHZhcmlhYmxlcyB0byBrZWVwIHRyYWNrIG9mIHRoZSBzdGFydCBhbmQgdGFyZ2V0IHNxdWFyZXNcbmxldCBzdGFydFNxdWFyZSA9IG51bGw7XG5sZXQgdGFyZ2V0U3F1YXJlID0gbnVsbDtcblxuY29uc3Qga25pZ2h0TW92ZXMgPSAoc3RhcnQsIHRhcmdldCkgPT4ge1xuICAvLyBEZWZpbmUgdGhlIHBvc3NpYmxlIG1vdmVzIGZvciBhIGtuaWdodFxuICBjb25zdCBtb3ZlcyA9IFtcbiAgICBbLTIsIC0xXSxcbiAgICBbLTIsIDFdLFxuICAgIFsyLCAtMV0sXG4gICAgWzIsIDFdLFxuICAgIFstMSwgLTJdLFxuICAgIFstMSwgMl0sXG4gICAgWzEsIC0yXSxcbiAgICBbMSwgMl0sXG4gIF07XG5cbiAgLy8gRGVmaW5lIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBzcXVhcmVzIGluIHRoZSBwYXRoXG4gIGNvbnN0IHBhdGggPSBbXTtcblxuICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBjaGVjayBpZiBhIHNxdWFyZSBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgY2hlc3Nib2FyZFxuICBjb25zdCBpc1dpdGhpbkJvdW5kcyA9IChbeCwgeV0pID0+IHggPj0gMCAmJiB4IDwgOCAmJiB5ID49IDAgJiYgeSA8IDg7XG5cbiAgLy8gRGVmaW5lIGEgcXVldWUgdG8ga2VlcCB0cmFjayBvZiB0aGUgc3F1YXJlcyB0byB2aXNpdFxuICBjb25zdCBxdWV1ZSA9IFtbc3RhcnRdXTtcblxuICAvLyBEZWZpbmUgYSBzZXQgdG8ga2VlcCB0cmFjayBvZiB0aGUgc3F1YXJlcyB3ZSBoYXZlIGFscmVhZHkgdmlzaXRlZFxuICBjb25zdCB2aXNpdGVkID0gbmV3IFNldChbc3RhcnQudG9TdHJpbmcoKV0pO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgcXVldWUgdW50aWwgd2UgZmluZCB0aGUgdGFyZ2V0IHNxdWFyZVxuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIC8vIEdldCB0aGUgbmV4dCBzcXVhcmUgdG8gdmlzaXQgZnJvbSB0aGUgcXVldWVcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgY29uc3QgY3VycmVudFNxdWFyZSA9IGN1cnJlbnRQYXRoW2N1cnJlbnRQYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSByZWFjaGVkIHRoZSB0YXJnZXQgc3F1YXJlXG4gICAgaWYgKGN1cnJlbnRTcXVhcmUudG9TdHJpbmcoKSA9PT0gdGFyZ2V0LnRvU3RyaW5nKCkpIHtcbiAgICAgIGZvciAoY29uc3Qgc3F1YXJlIG9mIGN1cnJlbnRQYXRoKSB7XG4gICAgICAgIHBhdGgucHVzaChzcXVhcmUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgdGhlIG5leHQgcG9zc2libGUgbW92ZXMgZnJvbSB0aGUgY3VycmVudCBzcXVhcmVcbiAgICBmb3IgKGNvbnN0IG1vdmUgb2YgbW92ZXMpIHtcbiAgICAgIGNvbnN0IG5leHRTcXVhcmUgPSBbXG4gICAgICAgIGN1cnJlbnRTcXVhcmVbMF0gKyBtb3ZlWzBdLFxuICAgICAgICBjdXJyZW50U3F1YXJlWzFdICsgbW92ZVsxXSxcbiAgICAgIF07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSBuZXh0IHNxdWFyZSBpcyB3aXRoaW4gYm91bmRzIGFuZCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHZpc2l0ZWRcbiAgICAgIGlmIChpc1dpdGhpbkJvdW5kcyhuZXh0U3F1YXJlKSAmJiAhdmlzaXRlZC5oYXMobmV4dFNxdWFyZS50b1N0cmluZygpKSkge1xuICAgICAgICAvLyBBZGQgdGhlIG5leHQgc3F1YXJlIHRvIHRoZSBxdWV1ZSBhbmQgbWFyayBpdCBhcyB2aXNpdGVkXG4gICAgICAgIHF1ZXVlLnB1c2goWy4uLmN1cnJlbnRQYXRoLCBuZXh0U3F1YXJlXSk7XG4gICAgICAgIHZpc2l0ZWQuYWRkKG5leHRTcXVhcmUudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgZGlkbid0IGZpbmQgdGhlIHRhcmdldCBzcXVhcmUsIHJldHVybiBudWxsXG4gIC8vcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHBhdGg7XG59O1xuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBtb3ZlIHRoZSBrbmlnaHQgaWNvbiB0byBhIHNxdWFyZSBvbiB0aGUgY2hlc3Nib2FyZFxuY29uc3QgbW92ZUtuaWdodFRvU3F1YXJlID0gKHNxdWFyZSkgPT4ge1xuICAvLyBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBzcXVhcmUgd2l0aCByZXNwZWN0IHRvIHRoZSBjaGVzc2JvYXJkXG4gIGNvbnN0IHJlY3QgPSBzcXVhcmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGxlZnQgPSByZWN0LmxlZnQgLSBjaGVzc2JvYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gIGNvbnN0IHRvcCA9IHJlY3QudG9wIC0gY2hlc3Nib2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGtuaWdodCBpY29uIHRvIHRoZSBzcXVhcmVcbiAga25pZ2h0SWNvbi5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcbiAga25pZ2h0SWNvbi5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG59O1xuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBhbmltYXRlIHRoZSBrbmlnaHQgbW92aW5nIHRvIGVhY2ggc3F1YXJlIGluIHRoZSBwYXRoXG5jb25zdCBhbmltYXRlS25pZ2h0TW92ZXMgPSAocGF0aCkgPT4ge1xuICAvLyBEZWZpbmUgYSB2YXJpYWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHNxdWFyZSBpbiB0aGUgcGF0aFxuICBsZXQgY3VycmVudFNxdWFyZUluZGV4ID0gMDtcblxuICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBtb3ZlIHRoZSBrbmlnaHQgdG8gdGhlIG5leHQgc3F1YXJlIGluIHRoZSBwYXRoXG4gIGNvbnN0IG1vdmVLbmlnaHRUb05leHRTcXVhcmUgPSAoKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBuZXh0IHNxdWFyZSBpbiB0aGUgcGF0aFxuICAgIGNvbnN0IG5leHRTcXVhcmUgPSBwYXRoW2N1cnJlbnRTcXVhcmVJbmRleF07XG5cbiAgICAvLyBNb3ZlIHRoZSBrbmlnaHQgdG8gdGhlIG5leHQgc3F1YXJlXG4gICAgbW92ZUtuaWdodFRvU3F1YXJlKFxuICAgICAgY2hlc3Nib2FyZC5jaGlsZHJlbltuZXh0U3F1YXJlWzFdICogOCArIG5leHRTcXVhcmVbMF0gKyAxXVxuICAgICk7XG5cbiAgICAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgc3F1YXJlIGluZGV4XG4gICAgY3VycmVudFNxdWFyZUluZGV4Kys7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSBzcXVhcmVzIGluIHRoZSBwYXRoLCBzY2hlZHVsZSB0aGUgbmV4dCBtb3ZlXG4gICAgaWYgKGN1cnJlbnRTcXVhcmVJbmRleCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KG1vdmVLbmlnaHRUb05leHRTcXVhcmUsIDUwMCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNjaGVkdWxlIHRoZSBmaXJzdCBtb3ZlXG4gIG1vdmVLbmlnaHRUb05leHRTcXVhcmUoKTtcbn07XG5cbi8vIEFuaW1hdGUgdGhlIGtuaWdodCBtb3ZpbmcgdG8gZWFjaCBzcXVhcmUgaW4gdGhlIHBhdGhcbmNvbnN0IGFuaW1hdGUgPSAoY3VycmVudFNxdWFyZUluZGV4KSA9PiB7XG4gIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0aCwgc3RvcCB0aGUgYW5pbWF0aW9uXG4gIGlmIChjdXJyZW50U3F1YXJlSW5kZXggPj0gcGF0aC5sZW5ndGgpIHtcbiAgICBjbGVhckludGVydmFsKGFuaW1hdGlvbklkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gTW92ZSB0aGUga25pZ2h0IHRvIHRoZSBjdXJyZW50IHNxdWFyZSBpbiB0aGUgcGF0aFxuICBjb25zdCBbeCwgeV0gPSBwYXRoW2N1cnJlbnRTcXVhcmVJbmRleF07XG4gIG1vdmVLbmlnaHRUb1NxdWFyZShjaGVzc2JvYXJkLmNoaWxkcmVuW3kgKiA4ICsgeF0pO1xuXG4gIC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBzcXVhcmUgaW5kZXhcbiAgY3VycmVudFNxdWFyZUluZGV4Kys7XG59O1xuXG4vLyBUZXN0IHRoZSBmdW5jdGlvbiB3aXRoIHNvbWUgZXhhbXBsZSBpbnB1dHNcbmNvbnNvbGUubG9nKGtuaWdodE1vdmVzKFswLCAwXSwgWzMsIDNdKSk7IC8vIEV4cGVjdGVkIG91dHB1dDogW1swLCAwXSwgWzEsIDJdLCBbMywgM11dXG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwgMF0sIFs3LCA3XSkpOyAvLyBFeHBlY3RlZCBvdXRwdXQ6IFtbMCwgMF0sIFsxLCAyXSwgWzAsIDRdLCBbMSwgNl0sIFsyLCA0XSwgWzQsIDVdLCBbNiwgNl0sIFs3LCA3XV1cbmNvbnNvbGUubG9nKGtuaWdodE1vdmVzKFswLCAwXSwgWzgsIDhdKSk7IC8vIEV4cGVjdGVkIG91dHB1dDogbnVsbFxuIl0sIm5hbWVzIjpbImNoZXNzYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwia25pZ2h0SWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImkiLCJzcXVhcmUiLCJNYXRoIiwiZmxvb3IiLCJhZGRFdmVudExpc3RlbmVyIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwic3RhcnRTcXVhcmUiLCJ0YXJnZXRTcXVhcmUiLCJwYXRoIiwia25pZ2h0TW92ZXMiLCJsZW5ndGgiLCJzcXVhcmVJbmRleCIsImNoaWxkcmVuIiwiYW5pbWF0ZUtuaWdodE1vdmVzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwibW92ZUtuaWdodFRvU3F1YXJlIiwic3RhcnQiLCJ0YXJnZXQiLCJtb3ZlcyIsImlzV2l0aGluQm91bmRzIiwicXVldWUiLCJ2aXNpdGVkIiwiU2V0IiwidG9TdHJpbmciLCJjdXJyZW50UGF0aCIsInNoaWZ0IiwiY3VycmVudFNxdWFyZSIsInB1c2giLCJtb3ZlIiwibmV4dFNxdWFyZSIsImhhcyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwidG9wIiwiY3VycmVudFNxdWFyZUluZGV4IiwibW92ZUtuaWdodFRvTmV4dFNxdWFyZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9