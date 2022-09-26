---
layout: sections.njk

seo:
  title: Metalsmith Company Starter
  description: "A starter to build a company website with Metalsmith"
  socialImage: "/assets/images/metalsmith-starter-social.png"
  canonicalOverwrite: ""

sections:
  - component: banner
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
    text:
      title: Metalsmith Company Starter
      header: "h1"
      subTitle: Using "sectioned" pages to build flexible page layouts
      prose: This starter is build in the style of a company marketing site. The components on this site are bare-bone interpretations of common information presentation patterns that can be found on many corporate websites. [The source code for this site can be found on GitHub](https://github.com/wernerglinka/metalsmith-company-starter).
    hasCtas: true
    ctas:
      - url: "https://github.com/wernerglinka/ms-components"
        label: Get the Starter
        isExternal: true
        isButton: true
        buttonStyle: "primary"
        isVideoTrigger: false
        videoId: ""
    mediaType: Image
    video:
      src: youtube
      id: ""
      tn: ""
      aspectRatio: ""
      caption:
    image:
      src: "v1664225756/company-starter/pexels-anamul-rezwan-1145434_w33asu.jpg"
      alt: "Metalsmith Javascript"
      aspectRatio: "66.67"
      caption: "Photo by Anamul Rezwan from Pexels"
    lottieData:
      src: ""
      control:
        autoplay: true
        loop: true
    icon: ""
    audio:
      bgImage: ""
      aspectRatio: ""
      ogg: ""
      mpeg: ""
      caption:
   
  - component: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: false
    paddingTop: false
    paddingBottom: false
    backgroundColor: ""
    targetId: ""
    text:
      title: How is this site build?
      header: "h2"
      subTitle: ""
      prose: |-
        Styles are written in SCSS, scripts in Javasript and compiled with Metalsmith plugins. Content is written in [Markdown](https://marked.js.org/) and templates are coded with [Nunjucks](https://mozilla.github.io/nunjucks/). **All page content is defined in the frontmatter of each page**. Except for blog pages, there are no long-text markdown sections. Rather, content text area fields in the page frontmatter are compiled into HTML with a Nunjucks filter. 

        Page sections are defined as a YAML object in the frontmatter. This approach lends itself to an easy integration with headless CMSs like forestry.io. Get more [detailed explanations in this blogpost](https://www.glinka.co/blog/building-flexible-page-layouts/).

        For example, this page is build with a header and footer that are the same for every page. Then it uses three components, a Banner, a text section and a media component twice for the body content.
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: "primary"

  - component: media
    disabled: false
    inContainer: true
    hasBackground: false
    bgColor: ""
    bgIsDark: false
    marginTop: true
    marginBottom: false
    paddingTop: true
    paddingBottom: false
    reverse: true
    text:
      title: "Important implementation details"
      header: "h3"
      subTitle: ""
      prose: |-
        - Images hosted on [cloudinary.io](https://cloudinary.com/).
        - All images are loaded with Low Res Placeholders first and then replaced when the image enters the browser viewport (lazy load).
        - [SVG Icons](https://feathericons.com/) integration.
    
    hasCtas: false
    ctas:
      - label: "Visit Nunjucks"
        url: "https://mozilla.github.io/nunjucks/"
        isVideoTrigger: false
        isButton: false
        buttonStyle: ""
        isExternal: true
    mediaType: Image
    video:
      src: ""
      id: ""
      tn: ""
      aspectRatio: ""
    image:
      src: "v1664225762/company-starter/pexels-andre-furtado-1263986_xqymoo.jpg"
      alt: "Metalsmith Javascript"
      aspectRatio: "66.67"
      caption: "Photo by Andre Furtado from Pexels"
    lottieData:
      src: ""
      control:
        autoplay: true
        loop: true
    icon: ""
    audio:
      bgImage: ""
      aspectRatio: ""
      ogg: ""
      mpeg: ""
  - component: media
    disabled: false
    inContainer: true
    hasBackground: false
    bgColor: ""
    bgIsDark: false
    marginTop: false
    marginBottom: false
    paddingTop: false
    paddingBottom: true
    reverse: false
    text:
      title: "Digital Asset Management with Cloudinary"
      header: "h3"
      subTitle: "Images are easy"
      prose: |-
        Cloudinary is used to store, transform, optimize, and deliver all site media assets — images and videos with easy-to-use APIs. This service takes the pain of image management and responsive image set creations away. You just tell cloudinary, in the image url, what the image size should be and more. Click here to [get started](https://cloudinary.com/documentation/how_to_integrate_cloudinary).

        Read about the [responsive image javascript module](https://www.glinka.co/blog/building-responsive-progressive-image-component/) on glinka.co.

    hasCtas: false
    ctas:
      - label: ""
        url: ""
        isVideoTrigger: false
        isButton: true
        buttonStyle: "primary"
        isExternal: true
    mediaType: Image
    video:
      src: ""
      id: ""
      tn: ""
      aspectRatio: ""
    image:
      src: "v1664226094/company-starter/cloudinary_byqcmi.png"
      alt: "cloudinary"
      aspectRatio: "64.36"
    lottieData:
      src: ""
      control:
        autoplay: true
        loop: true
    icon: ""
    audio:
      bgImage: ""
      aspectRatio: ""
      ogg: ""
      mpeg: ""

  - component: intro
    disabled: false
    inContainer: true
    marginTop: false
    marginBottom: true
    paddingTop: false
    paddingBottom: true
    backgroundColor: ""
    targetId: ""
    text:
      title: ""
      header: "h2"
      subTitle: ""
      prose: |-
        <a class="gitter-invite" href="https://gitter.im/metalsmith/community">
          <p>Join the Metalsmith community at <img src="/assets/images/gitter.png" alt="gitter" /> to discuss all-things Metalsmith.</p>
        </a>
    hasCtas: false
    ctas:
      - url: ""
        label: ""
        isExternal: false
        isButton: true
        buttonStyle: "primary"
---
