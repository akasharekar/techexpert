using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net;
using System.Threading;
using TechXpert.Website.Models;
using TechXpert.Website.Requests;
using System.Text;

namespace TechXpert.Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly EmailSettings _emailSettings;

        public ContactController(IOptions<EmailSettings> options)
        {
            _emailSettings = options.Value;
        }


        [HttpPost]
        public async Task<IActionResult> Post(ContactRequest input, CancellationToken cancellationToken)
        {

            if (! ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                StringBuilder mailBody = new StringBuilder();
                mailBody.AppendLine($"Name: {input.FirstName} {input.LastName}");
                mailBody.AppendLine("<br />");
                mailBody.AppendLine($"Email: {input.Email}");
                mailBody.AppendLine("<br />");
                mailBody.AppendLine($"Phone: {input.Mobile}");
                mailBody.AppendLine("<br />");
                mailBody.AppendLine($"Message: {input.Message}");
                mailBody.AppendLine("<br />");

                var emailClient = new SmtpClient(_emailSettings.Host);

                emailClient.Port = _emailSettings.Port;
                emailClient.EnableSsl = _emailSettings.RequireSsl;

                emailClient.UseDefaultCredentials = false;
                emailClient.Credentials = new NetworkCredential(_emailSettings.UserName, _emailSettings.Password);
                emailClient.DeliveryMethod = SmtpDeliveryMethod.Network;

                var message = new MailMessage
                {
                    From = new MailAddress(_emailSettings.UserName, "TechXpert"),
                    Subject = "TechXpert Website Contact",
                    Body = mailBody.ToString(),
                    IsBodyHtml = true,
                };
                message.To.Add(new MailAddress(_emailSettings.Recipient));

                await emailClient.SendMailAsync(message, cancellationToken);
            }
            catch (Exception ex)
            {
                return BadRequest("Unable to process request.");
            }

            

            return Ok("Thank You");
        }

    }
}
