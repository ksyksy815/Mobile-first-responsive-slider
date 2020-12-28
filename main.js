const oldbies = [
    {name: 'Tanya Sinclair',
    job: 'UX Engineer',
    image: './images/image-tanya.jpg',
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
    },
    {name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    image: './images/image-john.jpg',
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
    }
]

const profileImg = document.querySelector('.profileImg'),
      testimonial = document.querySelector('.testimonial'),
      nameText = document.querySelector('.name'),
      job = document.querySelector('.job'),
      preview = document.querySelector('.preview'),
      next = document.querySelector('.next');

/*---Default---*/
function defaultSlide() {
    nameText.textContent = oldbies[0].name,
    profileImg.attributes[1].textContent = oldbies[0].image,
    testimonial.textContent = oldbies[0].testimonial,
    job.textContent = oldbies[0].job;
}


function slideChange() {
    if (nameText.textContent == oldbies[0].name) {
        nameText.textContent = oldbies[1].name;
        profileImg.attributes[1].textContent = oldbies[1].image;
        testimonial.textContent = oldbies[1].testimonial;
        job.textContent = oldbies[1].job;
    } else if (nameText.textContent == oldbies[1].name) {
        defaultSlide();
    }
}

defaultSlide();
next.addEventListener('click', slideChange);
preview.addEventListener('click', slideChange);

