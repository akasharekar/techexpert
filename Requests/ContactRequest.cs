using System.ComponentModel.DataAnnotations;

namespace TechXpert.Website.Requests
{
    public record ContactRequest
    {
        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(50, ErrorMessage = "{0} can be max. {1} characters.")]
        public required string FirstName { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(50, ErrorMessage = "{0} can be max. {1} characters.")]
        public string? LastName { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(50, ErrorMessage = "{0} can be max. {1} characters.")]
        [EmailAddress(ErrorMessage = "Invalid email.")]
        public required string Email { get; set; }

        [Required(ErrorMessage = "{0} is required.")]
        [StringLength(50, ErrorMessage = "{0} can be max. {1} characters.")]
        public string? Mobile { get; set; }
                
        [StringLength(500, ErrorMessage = "{0} can be max. {1} characters.")]
        public string? Message { get; set; }
    }
}
