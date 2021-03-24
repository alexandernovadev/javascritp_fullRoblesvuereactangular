    $(function() {
     $('#file-upload').change(function(e) {
         addImage(e); 
        });
   
        function addImage(e){
         var file = e.target.files[0],
         imageType = /image.*/;
        // ComprueBA que sea una imagen

         if (!file.type.match(imageType))
          return;
     
         var reader = new FileReader();
         reader.onload = fileOnload;
         reader.readAsDataURL(file);
        }
     
        function fileOnload(e) {
         var result=e.target.result;
         $('#preview').attr("src",result);
        }
       });

   