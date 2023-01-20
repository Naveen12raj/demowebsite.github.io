import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  heading = 'Frequently Asked Questions';


  question = [
    {
      prodcate:'food',
      ques:'Do you offer any vegan options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'food',
      ques:'Do you offer any gluten free options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '

    },
    {
      prodcate:'food',
      ques:'Can I clone these sections?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'food',
      ques:'Why is Webflow so amazing?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'food',
      ques:'Do we need to write a business plan?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'food',
      ques:'How can we get funding for our start up?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },   
    {
      prodcate:'company',
      ques:'Why is Webflow so amazing?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'company',
      ques:'Do we need to write a business plan?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'company',
      ques:'How can we get funding for our start up?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },   
    {
      prodcate:'company',
      ques:'Do you offer any vegan options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'company',
      ques:'Do you offer any gluten free options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '

    },
    {
      prodcate:'company',
      ques:'Can I clone these sections?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'dilivery',
      ques:'Can I clone these sections?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'dilivery',
      ques:'Why is Webflow so amazing?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'dilivery',
      ques:'Do you offer any vegan options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'dilivery',
      ques:'Do you offer any gluten free options?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '

    },
  
    {
      prodcate:'dilivery',
      ques:'Do we need to write a business plan?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },
    {
      prodcate:'dilivery',
      ques:'How can we get funding for our start up?',
      ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },   
  ];

  prodcate = [
    {
      category:'food',
    },
    {
      category:'dilivery',      
    },
    {
      category:'company',
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
