# Ejercicio para la clase asincrónica

1. Desarrolle una lista de amiibos similar a la vista en clase con la lista de pokemones
2. Despliegue el nombre de los amiibos usando este endpoint: `https://www.amiiboapi.com/api/amiibo`
3. Cuando logre desplegar la lista de nombres, intente desplegar debajo de cada nombre la respectiva imagen que el mismo endpoint retorna

## Puntos a considerar

- Este ejercicio está enfocado en reforzar lo aprendido en la primer semana, por lo tanto, no se enfoque en hacer que lista se vea bien. Si logra implementar la lista correctamente y tiene tiempo, puede experimentar con CSS usando esta librería: https://cssinjs.org/?v=v10.9.0. react-jss es solo una librería de tantas que hay para manipular CSS. En la semana 3 se le explicará otras alternativas.
- Esta es la documentación del API de amiibos: https://www.amiiboapi.com/docs/
- Para desplegar una imagen en HTML puede usar este pequeño tutorial como referencia: https://www.w3schools.com/html/html_images.asp
- Recuerde que, por cuestiones de rendimiento, cuando se despliega una lista dinámica de elementos, React necesita reconcer cuál elemento está renderizando. Es por esto que se necesita usar el atributo `key` con un valor único como se hizo en clase.
- Si tiene dudas, recuerde usar el foro.
