document.querySelector('#numMembersForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var numMembers = document.getElementById('numMembers').value;
  
  if (numMembers > 0) {
    var password = generatePassword(numMembers);
    document.getElementById('passwordResult').textContent = 'Your password is: ' + password;
  }
});

function generatePassword(numMembers) {
  var nameId = [18273, 12523, 235631, 126463, 1263546, 3462367, 324623563, 131462347, 1263546, 2356343, 4357263, 347256134, 3463464, 24672372];
  var nameList = ['Yash', 'Mckenna', 'Grace', 'Mark', 'Aarush'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
  var password = '';
  for (var i = 0; i < numMembers; i++) {
    var userId = nameId[Math.floor(Math.random() * nameId.length)];
    var userName = nameList[Math.floor(Math.random() * nameList.length)];
    var specialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password += userName + userId + specialChar + ' ';
  }
  
  return password.trim();
}
