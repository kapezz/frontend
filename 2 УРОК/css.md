# p + .intro
#### p + .intro selects every element with class="intro" that directly follows a p
#### div + a selects every a element that directly follows a div (выбирает каждый элемент a, который следует непосредственно за div)

# A ~ B
#### Вы можете выбрать всех братьев и сестер элемента, следующих за ним. Это похоже на смежный селектор (A + B), за исключением того, что он получает все следующие элементы вместо одного. 
#### A ~ B selects all B that follow a A (B выбирает все B, следующие за A)

# A > B 
#### A> B выбирает все B, которые являются прямыми дочерними элементами A 

# :only-child
#### span:only-child выбирает элементы диапазона, которые являются единственными дочерними элементами какого-либо другого элемента. 

# :last-child 
#### выбирает все последние дочерние элементы 

# :nth-last-child(2) 
#### выбирает все предпоследние дочерние элементы. 

# :first-of-type 
#### выбирает первый тип в любом элементе - 

# nth-of-type()
#### .example: nth-of-type (odd) выбирает все нечетные экземпляры класса example. 
#### .example:span: nth-of-type (6n + 2) выбирает каждый 6-й экземпляр диапазона, начиная со (и включая) второго экземпляра. 
#### считать нужно в обратную сторону 
:nth-child(3n+1)
1,4,7,10 - то есть с обратной стороны 1 - и плюс 3n, отсчет начинается с первого элемента и след элемент через 3 
[Подробнее как считать](http://css.yoksel.ru/nth-child/)

# :only-of-type
#### выбирает диапазон в пределах любого тега, если это единственный диапазон в нем. 

# :last-of-type
#### p span: last-of-type выбирает последний диапазон в каждом p. 

# ampty 
#### div: empty выбирает все пустые элементы div. 

# :not
#### div: not (: first-child) выбирает каждый div, который не является первым дочерним элементом. 
#### :not (.big, .medium) выбирает все элементы, у которых нет class = "big" или class = "medium". 

# a[href]
#### выбирает все элементы с атрибутом href = "something". apple[for]
#### [value] selects all elements that have a value="anything" attribute.
#### a[href] selects all a elements that have a href="anything" attribute.
#### input[disabled] selects all input elements with the disabled attribute

# [attribute="value"]
##### input[type="checkbox"] selects all checkbox input elements. bento[for="Vitaly"]

# [attribute^="value"]
#### .toy [category ^ = "Swim"] выбирает элементы с классом toy и либо category = "Swimwear, либо category =" Swimming ". plate[for^="Sa"]

# [attribute$="value"]
#### img [src $ = ". jpg"] выбирает все изображения, отображающие изображение в формате .jpg. 

# [attribute*="value"]
#### img[src*="/thumbnails/"] selects all image elements that show images from the "thumbnails" folder.
#### [class*="heading"] selects all elements with "heading" in their class, like class="main-heading" and class="sub-heading"

# Слова, часто используемые в CSS-классах
[Слова](https://github.com/yoksel/common-words)  
[Типовые селекторы](https://codepen.io/bcherepakha/pen/OQbwVZ)  
[CSS Dinner](https://flukeout.github.io/)  
[Специфичность селектор](https://css-tricks.com/specifics-on-css-specificity/)  
[Посчитай селекторы](https://codepen.io/bcherepakha/full/jJXzeR)


