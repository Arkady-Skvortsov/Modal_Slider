let images = document.querySelectorAll('.images');

images.forEach((img) => {
  img.addEventListener('click', () => {
     let main_win = document.createElement('div');
     let picture = document.createElement('div');
     let img_picture = document.createElement('img');
     let name_of_block = document.createElement('div');
     let name = document.createElement('span');
     let right_button = document.createElement('div');
     let left_button = document.createElement('div');
     let right_icon = document.createElement('i');
     let left_icon = document.createElement('i');
     let crst = document.createElement('div');
     let crst_icon = document.createElement('i');
     let count = document.createElement('span');
     let Clone_img = img.cloneNode(true);
     let count_img = Clone_img.dataset.img;

     main_win.className = 'main_win';
     picture.className = 'picture';
     img_picture.className = 'img_picture';
     name_of_block.className = 'name_of_block';
     name.className = 'name';
     right_button.className = 'right_button';
     left_button.className = 'left_button';
     right_icon.className = 'right_icon';
     left_icon.className = 'left_icon';
     count.className = 'count';
     crst.className = 'crst';
     crst_icon.className = 'crst_icon';
     right_icon.className = 'fas fa-chevron-right button_icon';
     left_icon.className = 'fas fa-chevron-left button_icon'; 
     crst_icon.className = 'fas fa-times cross';

     document.body.appendChild(main_win);
     main_win.appendChild(picture);
     picture.appendChild(img_picture);
     picture.appendChild(name_of_block);
     name_of_block.appendChild(name);
     main_win.appendChild(right_button);
     right_button.appendChild(right_icon);
     main_win.appendChild(left_button);
     left_button.appendChild(left_icon);
     main_win.appendChild(count);
     main_win.appendChild(crst);
     crst.appendChild(crst_icon);

     main_win.classList.add('show_anim'); 

     setTimeout(() => {
        main_win.classList.remove('show_anim');
        main_win.classList.add('show');
     }, 1000);

     name.textContent = Clone_img.alt;
     img_picture.src = Clone_img.src;
     count.textContent = `${count_img}/12`;

     if(count_img >= 12) {
     	right_button.classList.add('hide_right');

     	setTimeout(() => {
           right_button.classList.remove('hide_right');
           right_button.classList.add('hide_right2');
     	}, 700);
     } else if(count_img == 1) {
     	 left_button.classList.add('hide_left');

       	 setTimeout(() => {
            left_button.classList.remove('hide_left');
            left_button.classList.add('hide_left2');
     	 });
     } else {
        right_button.classList.remove('hide_right2');
        left_button.classList.remove('hide_left2');
     } 

     crst.addEventListener('click', () => {
        main_win.classList.add('hide_anim');

        setTimeout(() => {
           main_win.classList.remove('hide_anim');
           main_win.classList.add('hide'); 
        }, 1000);  
     });  

     right_button.addEventListener('click', () => {
         img_picture.src = images[count_img].src;

         name.textContent = images[count_img].alt;

     	 count_img++;

     	 count.textContent = `${count_img}/12`;

     	 if(count_img >= 12) {
            right_button.classList.add('hide_right');

            setTimeout(() => {
               right_button.classList.remove('hide_right');
               right_button.classList.add('hide_right2');
            }, 700);
     	 } else {   
            right_button.classList.remove('hide_right2');
            left_button.classList.remove('hide_left2');
     	 }
     });

     left_button.addEventListener('click', () => {
         img_picture.src = images[count_img-2].src;

         name.textContent = images[count_img-2].alt;

         count_img--;

         count.textContent = `${count_img}/12`;

         if(count_img == 1) {
         	left_button.classList.add('hide_left');

         	setTimeout(() => {
               left_button.classList.remove('hide_left');
               left_button.classList.add('hide_left2');
         	}, 700);
         } else {
         	left_button.classList.remove('hide_left2');
         	right_button.classList.remove('hide_right2');
         }
     });
  });
});
