namespace TechXpert.Website.Models
{
    public class EmailSettings
    {
        public const string SectionName = "EmailSettings";

        public string Host { get; set; }

        public int Port { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public bool RequireSsl { get; set; }

        public string Recipient { get; set; }
    }
}
