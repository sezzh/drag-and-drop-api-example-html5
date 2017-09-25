(function () {
  var draggableElement = document.querySelector('[data-drag="button"]')

  var dropZoneElement = document.querySelector('[data-drag="drop-zone"]')

  draggableElement.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', 'HFDSASCGF')
    event.dataTransfer.dropEffect = 'copy'
  })

  dropZoneElement.addEventListener('drop', function (event) {
    event.preventDefault()
    console.dir(event);
    dropZoneElement.style.backgroundColor = 'green'
    dropZoneElement.innerHTML = event.dataTransfer.getData('text/plain')
  })

  dropZoneElement.addEventListener('dragover', function (event) {
    event.preventDefault()
    console.log('dragover event!');
    dropZoneElement.style.backgroundColor = 'olive'
  })

  draggableElement.addEventListener('dragend', function (event) {
    event.preventDefault()
    dropZoneElement.style.backgroundColor = 'teal'
  })
})()
