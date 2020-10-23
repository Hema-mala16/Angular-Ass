using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
  public class Comment
  {
    [Key]
    public int id { get; set; }
    public string commenter { get; set; }
    public string comment { get; set; }
  }
}
