function observarElementosNoDOM() {
    var observer = new MutationObserver(function(mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.addedNodes.length > 0) {
              
                var elementos = document.querySelectorAll('i.icon.icon-remove.item-remove-ico');
                  var links = document.querySelectorAll('.product-name a');
				   alterarEmcasa();
                   emFranquia();
    
   				 links.forEach(function(link) {
       			 	link.href = 'javascript:void(0)';
    			 });
  
  				
                var cells = document.querySelectorAll('td.product-image');

  				cells.forEach(function(cell) {

    				var link = cell.querySelector('a');

   
    				if (link) {
	      				link.removeAttribute('href');
    				}
  				});
  
                if (elementos.length > 0) {
                    alterarClassesDosIcones();
                  	alterarEmcasa();

                    emFranquia();
                    observer.disconnect(); // Parar de observar após a ação ser realizada
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}