package com.mokshith.refnet.api;

import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class JobControllerTest {
  @Test void createsAndListsJobs() {
    JobController controller = new JobController();
    Job saved = controller.create(new Job(null, "Backend Engineer", "RefNet", "Remote", "Build referral workflows"));
    List<Job> jobs = controller.list();
    assertEquals(1L, saved.id());
    assertEquals("Backend Engineer", jobs.getFirst().title());
  }
}
