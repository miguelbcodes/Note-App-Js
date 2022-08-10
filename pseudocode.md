# Note App Pseudocode

## Render the notes in the page

1. Select an item from the localStorage to store the notes
  If the item's value is null:
    a. Create an empty array to store the notes
  else:
    b. Recieve the string value from the item and convert it into an array that each element is a note
2. Create a card component for each note from the array
3. Show the cards in the page

## Add Notes

1. Select an item from the localStorage to store the notes
  If the item's value is null:
    a. Create an empty array to store the notes
  else:
    b. Recieve the string value from the item and convert it into an array that each element is a note
2. Add the text(note) from the textarea into the array
3. Update the item from the localStorage using the array value
4. Clean the text of the textarea
5. Update the notes render 

## Delete Notes

1. Select an item from the localStorage to store the notes
  If the item's value is null:
    a. Create an empty array to store the notes
  else:
    b. Recieve the string value from the item and convert it into an array that each element is a note
2. Remove the current note from the array
3. Update the item from the localStorage using the array value
4. Update the notes render

## Edit Notes

1. Select an item from the localStorage to store the notes
  If the item's value is null:
    a. Create an empty array to store the notes
  else:
    b. Recieve the string value from the item and convert it into an array that each element is a note
3. Open the current note from the array in a pop-up
4. Make the note text editable
5.I If the user clicks the 'close' button:
  a. Close the pop-up without saving the changes
5.II If the user clicks the 'save' button:
  a. Update the item from the localStorage using the new text typed
  b. Close the pop-up
  c. Update the notes render