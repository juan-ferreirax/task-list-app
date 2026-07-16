from django.db import models

# Create your models here.
class Task(models.Model):
    STATUS_CHOICES = [
        ("pendente", "Pendente"),
        ("em andamento", "Em andamento"),
        ("concluída", "Concluída"),
    ]

    title = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=30)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pendente")
    edited_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "task"
        managed = True
    
    def __str__(self):
        return self.title
    


    