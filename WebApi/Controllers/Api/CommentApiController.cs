using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers.Api
{
    public class CommentApiController : ApiController
    {
    private readonly ApplicationDbContext _context;
    public CommentApiController()
    {
      _context = new ApplicationDbContext();
    }
    public IHttpActionResult GetValue()
    {
      var value = _context.Comments.ToList();
      if (value == null)
      {
        return NotFound();
      }
      return Ok(value);
    }
    public IHttpActionResult GetValue(int id)
    {
      var value = _context.Comments.SingleOrDefault(c => c.id == id);
      if (value == null)
      {
        return NotFound();
      }

      return Ok(value);
    }
    //Post /api/customerapi
    [HttpPost]
    public IHttpActionResult CreateData(Comment comment)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest("Model data is invalid");
      }

      _context.Comments.Add(comment);
      _context.SaveChanges();
      return Ok(comment);
    }
    //Put /api/customerapi/1
    [HttpPut]
    public IHttpActionResult UpdateData(int id, Comment comment)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest("Model data is invalid");
      }
      var proInDb = _context.Comments.SingleOrDefault(c => c.id == id);
      if (proInDb == null)
      {
        return NotFound();
      }

      proInDb.comment = comment.comment;
      proInDb.commenter = comment.commenter;

      _context.SaveChanges();
      return Ok();
    }
    //Delete /api/customerapi/1

    public IHttpActionResult DeleteData(int id)
    {
      if (id <= 0)
      {
        return BadRequest("Not a Valid Customer id");
      }
      var proInDb = _context.Comments.SingleOrDefault(c => c.id == id);
      if (proInDb == null)
      {
        return NotFound();
      }

      _context.Comments.Remove(proInDb);
      _context.SaveChanges();
      return Ok();
    }
    protected override void Dispose(bool disposing)
    {
      _context.Dispose();
    }
  }
}

