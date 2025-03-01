/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = '';
  for (let i = email.length; i >= 0; i--) {
    if (email[i] === '@') {
      domain = email.slice([i + 1], email.length);
      return domain;
    }
  }
  return -1;
}
module.exports = getEmailDomain;
